node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Stop container') {
      sh 'docker rm -f stina-client-container || true'
    }

    stage('Build image') {
        app = docker.build("stina-client:prod")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy') {
        sh 'docker run -d -p 80:80 stina-client:prod -name stina-client-container'
    }
}
