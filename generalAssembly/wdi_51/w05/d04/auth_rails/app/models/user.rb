class User < ApplicationRecord
    has_secure_password
    has_many :sandwiches
    validates :email, presence: true
    validates :email, uniqueness: true
end
