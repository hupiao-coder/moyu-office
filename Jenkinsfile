pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: GIT_BUILD_REF]],
          userRemoteConfigs: [[
            url: GIT_REPO_URL,
            credentialsId: CREDENTIALS_ID
          ]]])
        }
      }
      stage('推送到 GitHub') {
        steps {
          echo '正在推送...'
          sh 'git fetch https://$GitHub_Username:$GitHub_Token@github.com/$GitHub_Repo_Username/$GitHub_Repo_Name.git'
          sh 'git push -f https://$GitHub_Username:$GitHub_Token@github.com/$GitHub_Repo_Username/$GitHub_Repo_Name.git HEAD:' + "$env.BRANCH_NAME"
          echo '已完成同步推送.'
        }
      }
    }
  }