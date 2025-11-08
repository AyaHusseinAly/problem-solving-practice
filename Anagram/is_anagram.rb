def is_anagram(test, original)
    if(test.length != original.length)    
      return false
    end
    tSorted = test.downcase.split('').sort();
    oSorted = original.downcase.split('').sort();
    for i in 0...original.length
        if(tSorted[i] != oSorted[i])    
          return false
        end
    end
    return true;
end