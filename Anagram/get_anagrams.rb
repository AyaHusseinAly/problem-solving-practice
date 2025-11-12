def get_anagrams(str)
    return [str] if str.length <= 1
    str.chars.permutation.map(&:join).uniq
end


# manually
def get_anagrams_manually(str)
    if str.length <= 1 
      return [str]
    end
    
    result = []
    for i in 0...str.length
      removed_char = str[i]
      remaining_str = str[0...i] + str[i+1..-1]
      rec_anagrams = getAnagrams(remaining_str)
      res = rec_anagrams.map {|str|
          removed_char + str
        }
      result += res
    end
    
    result.uniq
end