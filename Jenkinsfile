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

pipeline {
    agent any
    tools {
         nodejs 'node'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                bat 'docker build -t your-repo/your-image-name:latest .'  // Build the Docker image
                // echo 'Building the project...'
                // bat 'npm install'  // Installs dependencies
                // bat 'npm run build'  // Builds the production-ready files
            }
        }


        stage('Test') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'code quality...'

            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to production...'
            }
        }
    }
}
