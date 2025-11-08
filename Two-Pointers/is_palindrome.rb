
def is_palindrome(str)
    str = str.downcase
    (0...str.length / 2).each do |i|
      return false if str[i] != str[-i - 1]
    end
    return true
end
  

## other solution - simpler but less efficient
# def is_palindrome(str)
#     for i in 0...str.length
#         if str[i].downcase != str[-i - 1].downcase
#         return false
#         end
#     end

#     return true

# end
