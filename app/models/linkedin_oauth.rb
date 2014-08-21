module API
  class LinkedIn
    include HTTParty
    base_uri "https://www.linkedin.com"
    default_params :output => 'json'
    format :json

    API_KEY = "75la5ohzjcngqe"
    SECRET = "hbcb"
    STATE = "this is some shit"
    REDIRECT_URI = "http://localhost:9393"

    def initialize(username, password)
      basic_auth 'username', 'password'
    end

    def self.step1_auth_code_gen_redirect
      "https://www.linkedin.com/uas/oauth2/authorization?response_type=code" +
      "&client_id=#{API_KEY}" +
      "&state=#{STATE}" +
      "&redirect_uri=#{REDIRECT_URI}"
    end

    def user_auth_(auth_code)
    end

  end
end
