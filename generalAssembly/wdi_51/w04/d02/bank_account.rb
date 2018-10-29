# Create a class for a bank customer called `Customer`
# - each customer object will have a name, account number, starting balance of 0
# - each customer will have a deposit and withdraw method to change the balance accordingly
# - keep track of how many customers you have by including a class variable called `@@count`, and increment number with every customer creation
class Customer
    @@count = 0 
    def initialize name, account_number, money
        @@count += 1
        @name = name
        @account_number = account_number
        @money = money
        @balance_open = false
    end
    def self.count
        @@count
    end

    attr_reader :name, :account_number
    attr_accessor :money

    def open_account
        @balance_open = !@balance_open
        p @money
     end

    def deposit
        if @money > 0 
           p "Put your money here"
        else
            p "Get your money up"
        end
    end
end

suggestion = ["Join Us Today"]
greeting = ["Thanks for Joining"]
customer_1 = Customer.new('John', '12061993', 14950)
customer_1.deposit