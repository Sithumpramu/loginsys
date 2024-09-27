

// pipeline {
//     agent any
//     environment {
//         DATADOG_API_KEY = credentials('ba893a72db4c75d13106acf4c995e7a3')
//     }
//     tools {
//         nodejs 'node'
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Logging into Docker Hub...'
//                 bat 'docker login -u kmds -p dckr_pat_LqTQehUbTG9LVrzIjSeXrVQUVh4'
                
//                 echo 'Building the Docker image...'
//                 bat 'docker build -t kmds/my-app:latest .'
                
//                 echo 'Pushing the Docker image to Docker Hub...'
//                 bat 'docker push kmds/my-app:latest'

//     }
//         }

//         stage('Test') {
//             steps {
//                 echo 'Running unit tests...'
//                 bat 'npm test'
//             }
//         }

 

        
//           stage('Codequality analysis') {
//             steps {
//               script {
//                   scannerHome = tool 'SonarQube'
//                   echo "${scannerHome}"

//               }
//               withSonarQubeEnv('SonarCloud') {
//                 bat "C:/SonarQube/sonar-scanner-6.1.0.4477-windows-x64/bin/sonar-scanner -Dsonar.projectKey=Sithumpramu_loginsys -Dsonar.organization=sithumpramu -Dsonar.host.url=https://sonarcloud.io"

//               }
//             }
//           }
        
//         stage('Deploy') {
//             steps {
//                 script {
//                     echo 'Deploying the Docker container...'
//                     bat 'docker-compose pull'
//                     bat 'docker-compose up -d'
//                 }
//             }
//         }

//         stage('Release') {
//     steps {
//         echo 'Releasing to Production...'

    
//         bat '''
//             "C:\\Users\\user\\Downloads\\OctopusTools.9.0.0.win-x64\\octo.exe" create-release ^
//             --project "My Jenkins Deployment Project" ^
//             --releaseNumber 1.0.0 ^
//             --deployTo Development ^
//             --server https://loginkmds.octopus.app ^
//             --apiKey API-PZ73ENNRIGUN60LKRAEQOIHNY7WQ
//         '''
        
//     }
// }

//        stage('Setup Basic Datadog Monitoring') {
//                    steps {
//                        script {
//                            // Send deployment event to Datadog
//                            sh """
//                                curl -X POST "https://api.datadoghq.com/api/v1/events" \
//                                -H "Content-Type: application/json" \
//                                -H "DD-API-KEY: ${DATADOG_API_KEY}" \
//                                -d '{
//                                    "title": "Deployment to Production",
//                                    "text": "Version ${env.BUILD_NUMBER} deployed to production",
//                                    "priority": "normal",
//                                    "tags": ["environment:production", "version:${env.BUILD_NUMBER}"]
//                                }'
//                            """
                           
//                            // Set up a basic uptime monitor
//                            sh """
//                                curl -X POST "https://api.datadoghq.com/api/v1/monitor" \
//                                -H "Content-Type: application/json" \
//                                -H "DD-API-KEY: ${DATADOG_API_KEY}" \
//                                -d '{
//                                    "name": "Website Uptime",
//                                    "type": "service check",
//                                    "query": "\"http.can_connect\".over(\"url:http://your-website-url\").last(3).count_by_status()",
//                                    "message": "Website is down! Please check immediately.",
//                                    "tags": ["app:your-app-name", "env:production"],
//                                    "options": {
//                                        "notify_no_data": true,
//                                        "no_data_timeframe": 10
//                                    }
//                                }'
//                            """
//                        }
//                    }
        
//     }
// }

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

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test'
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

        stage('Setup Basic Datadog Monitoring') {
            steps {
                script {
                    echo 'Sending metrics to Datadog via DogStatsD...'
                    
                    // Send build success metric to Datadog using DogStatsD
                    bat '''
                        echo "jenkins.build.success:1|c" | nc -u -w0 localhost 8125
                    '''
                    
                    // Send a custom deployment metric
                    bat '''
                        echo "jenkins.deploy.success:1|c" | nc -u -w0 localhost 8125
                    '''
                }
            }
        }
    }
}
