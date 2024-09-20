pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Code Quality') {
            steps {
                // Example of SonarQube integration
                withSonarQubeEnv('SonarQube') {
                    sh 'npm run sonar'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy steps go here (e.g., S3, Docker, etc.)
                echo 'Deploying to production...'
            }
        }
    }
}
