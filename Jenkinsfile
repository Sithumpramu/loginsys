// pipeline {
//     agent any

//     environment {
//         BUILD_TOOL = 'Maven'                       
//         TEST_TOOL = 'JUnit'                        
//         CODE_ANALYSIS_TOOL = 'SonarQube'           
//         SECURITY_SCAN_TOOL = 'OWASP Dependency-Check' 
//         STAGING_ENV = 'AWS EC2 - Staging Server'   
//         PRODUCTION_ENV = 'AWS EC2 - Production Server' 
//         NOTIFY_EMAIL = 'sithumpramuu@gmail.com'     
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 echo "Building the code using ${env.BUILD_TOOL}..."
//                 // Tool: Maven 
//             }
//         }
//         stage('Unit and Integration Tests') {
//             steps {
//                 echo "Running unit tests using ${env.TEST_TOOL}..."
//                 echo "Running integration tests using ${env.TEST_TOOL}..."
//                 // Tool: JUnit, Selenium, TestComplete
//             }
//             post {
//                 success {
//                     script {
//                         def buildLog = currentBuild.getRawBuild().getLog(50).join('\n') // Last 50 lines of log
//                         mail to: "${env.NOTIFY_EMAIL}",
//                             subject: "Test Stage Success: ${env.JOB_NAME}",
//                             body: "The 'Test' stage has completed successfully.\n\nLog:\n${buildLog}"
//                     }
//                 }
//                 failure {
//                     script {
//                         def buildLog = currentBuild.getRawBuild().getLog(50).join('\n') 
//                         mail to: "${env.NOTIFY_EMAIL}",
//                             subject: "Test Stage Failed: ${env.JOB_NAME}",
//                             body: "The 'Test' stage has failed.\n\nLog:\n${buildLog}"
//                     }
//                 }
//             }
//         }
//         stage('Code Analysis') {
//             steps {
//                 echo "Analyzing code quality using ${env.CODE_ANALYSIS_TOOL}..."
//                 // Tool: SonarQube 
//             }
//         }
//         stage('Security Scan') {
//             steps {
//                 echo "Performing a security scan using ${env.SECURITY_SCAN_TOOL}..."
//                 // Tool: OWASP Dependency-Check 
//             }
//             post {
//                 success {
//                     script {
//                         def buildLog = currentBuild.getRawBuild().getLog(50).join('\n') 
//                         mail to: "${env.NOTIFY_EMAIL}",
//                             subject: "Security Scan Stage Success: ${env.JOB_NAME}",
//                             body: "The 'Security Scan' stage has completed successfully.\n\nLog:\n${buildLog}"
//                     }
//                 }
//                 failure {
//                     script {
//                         def buildLog = currentBuild.getRawBuild().getLog(50).join('\n') 
//                         mail to: "${env.NOTIFY_EMAIL}",
//                             subject: "Security Scan Stage Failed: ${env.JOB_NAME}",
//                             body: "The 'Security Scan' stage has failed.\n\nLog:\n${buildLog}"
//                     }
//                 }
//             }
//         }
//         stage('Deploy to Staging') {
//             steps {
//                 echo "Deploying the application to the staging environment: ${env.STAGING_ENV}..."
//                 // (e.g., SSH to EC2 instance, AWS EC2 instance)
//             }
//         }
//         stage('Integration Tests on Staging') {
//             steps {
//                 echo "Running integration tests in the staging environment..."
//             }
//         }
//         stage('Deploy to Production') {
//             steps {
//                 echo "Deploying the application to the production environment: ${env.PRODUCTION_ENV}..."
//                 // (e.g., SSH to EC2 instance, AWS EC2 instance)
//             }
//         }
//     }
// }

// pipeline {
//     agent any
//     tools {
//          nodejs 'node'
//     }

//     stages {

//         stage('Build') {
//             steps {
//                 echo 'Building the Docker image...'
//                 bat 'docker build -t your-repo/your-image-name:latest .'  

//             }
//         }


//         stage('Test') {
//             steps {
//                 echo 'Running unit tests...'
//                 bat 'npm test'
//             }
//         }

//         stage('Code Quality') {
//             steps {
//                 echo 'code quality...'
//             steps {
//                 withSonarQubeEnv('SonarQube') {  // Ensure this matches your SonarQube configuration in Jenkins
//                     sh 'sonar-scanner -Dsonar.projectKey=a4728236 -Dsonar.organization=sithumpramu -Dsonar.login=2a3fd26271a2ad2d734d17fba879264fc42eec4d'
//                 }

//                  }
//                   }
//         }

//         stage('Deploy') {
//             steps {
//                 echo 'Deploying to production...'
//             }
//         }
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
    }
}
