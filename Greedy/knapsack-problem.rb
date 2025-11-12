def knapsack(capacity, items)
    # Add index to items and sort by value/weight ratio descending
    sorted = items.map.with_index { |(value, weight), i| [value, weight, i] }
                  .sort_by { |value, weight, _i| -(weight.to_f / value) } 
  
    quantities = []
  
    sorted.each do |value, weight, index|
      qty = (capacity / value).floor
      quantities << [qty, index]
      capacity -= qty * value
      break if capacity <= 0
    end
  
    # Return quantities in original item order as required here
    quantities.sort_by { |_, index| index }.map { |qty, _| qty }
  end
  