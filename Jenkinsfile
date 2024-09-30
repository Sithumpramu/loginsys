pipeline {
    agent any
    tools {
        nodejs 'node'
    }


    stages {
        stage('Build') {
            steps {
                echo 'Logging into Docker Hub...'
                bat 'docker login -u kmds -p dckr_pat_LqTQehUbTG9LVrzIjSeXrVQUVh4'
                
                echo 'Building the Docker image...'
                bat 'docker build -t kmds/my-app:latest .'
                
                echo 'Pushing the Docker image to Docker Hub...'
                bat 'docker push kmds/my-app:latest'
            }
        }

        stage('Unit Tests') {
            steps {
                echo 'Running unit tests...'
                bat 'npm run test:unit'
                // bat 'npm run test -- --coverage'
            }
        }


        
        stage('Codequality analysis') {
            steps {
                script {
                    scannerHome = tool 'SonarQube'
                    echo "${scannerHome}"
                }
                withSonarQubeEnv('SonarCloud') {
                    bat "C:/SonarQube/sonar-scanner-6.1.0.4477-windows-x64/bin/sonar-scanner -Dsonar.projectKey=Sithumpramu_loginsys -Dsonar.organization=sithumpramu -Dsonar.host.url=https://sonarcloud.io"
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the Docker container...'
                    bat 'docker-compose pull'
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing to Production...'
                bat '''
                    "C:\\Users\\user\\Downloads\\OctopusTools.9.0.0.win-x64\\octo.exe" create-release ^
                    --project "My Jenkins Deployment Project" ^
                    --releaseNumber 1.0.0 ^
                    --deployTo Development ^
                    --server https://loginkmds.octopus.app ^
                    --apiKey API-PZ73ENNRIGUN60LKRAEQOIHNY7WQ
                '''
            }
        }


        stage('Monitoring and alerting') {
             steps {
                 script {

                    echo 'Configuring Datadog monitoring...'

                    bat '"C:\\Program Files\\Datadog\\Datadog Agent\\bin\\agent.exe" status'
                    
                    bat 'curl -X POST "https://api.datadoghq.com/api/v1/events" -H "Content-Type: application/json" -H "DD-API-KEY: ba893a72db4c75d13106acf4c995e7a3" -d "{\\"title\\": \\"Jenkins Build Event\\", \\"text\\": \\"A new build has been initiated\\", \\"priority\\": \\"normal\\", \\"tags\\": [\\"jenkins\\", \\"build:%BUILD_NUMBER%\\"]}"'
                 }
    }

    }

    



    }
}
