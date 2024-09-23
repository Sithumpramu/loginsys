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
                echo 'Building the Docker image...'
                bat 'docker build -t your-repo/your-image-name:latest .'  
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test'
            }
        }

        // stage('Code Quality') {
        //     steps {
        //         echo 'Running code quality analysis...'
        //         // withSonarQubeEnv('SonarQube') {  // Ensure this matches your SonarQube configuration in Jenkins
        //         //     bat 'sonar-scanner -Dsonar.verbose=true -Dsonar.projectKey=Sithumpramu_loginsys -Dsonar.organization=sithumpramu -Dsonar.login=2a3fd26271a2ad2d734d17fba879264fc42eec4d'
        //         //     sh 'printenv | grep SONAR'

        //         // }
        //             // withSonarQubeEnv('SonarQube') {  // Ensure this matches your SonarQube server config in Jenkins
        //             // bat '''
        //             // sonar-scanner ^
        //             //   -Dsonar.projectKey=Sithumpramu_loginsys ^
        //             //   -Dsonar.organization=sithumpramu ^
        //             //   -Dsonar.sources=src ^
        //             //   -Dsonar.host.url=https://sonarcloud.io ^
        //             //   -Dsonar.login=2a3fd26271a2ad2d734d17fba879264fc42eec4d
        //             // '''
        //             def scannerHome = tool 'SonarQube'
        //             withSonarQubeEnv('SonarQube') {
        //                 sh "${scannerHome}/bin/sonar-scanner \
        //                     -Dsonar.projectKey=Sithumpramu_loginsys \
        //                     -Dsonar.organization=sithumpramu \
        //                     -Dsonar.sources=. \
        //                     -Dsonar.host.url=https://sonarcloud.io"
                    
        //         }
        //     }
        // }

stage('SonarQube Analysis') {
    steps {
        script {
            def scannerHome = tool 'SonarQube'
            withSonarQubeEnv('SonarQube') {
                sh """
                    echo "Running SonarQube Scanner from: ${scannerHome}"
                    echo "Current directory: \$(pwd)"
                    ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=Sithumpramu_loginsys \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://sonarcloud.io \
                        -Dsonar.projectBaseDir=. \
                        -Dsonar.working.directory=.scannerwork
                    
                    echo "SonarQube Scanner completed"
                    
                    if [ -f ".scannerwork/report-task.txt" ]; then
                        echo "Report task file found"
                        cat .scannerwork/report-task.txt
                    else
                        echo "Report task file not found"
                        exit 1
                    fi
                """
            }
        }
    }
}
        stage('Deploy') {
            steps {
                echo 'Deploying to production...'
                // bat 'docker-compose up -d' 
            }
        }
    }
}
