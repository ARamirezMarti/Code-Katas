

def positive_sum(arr):
    # Your code here
    positive_array=[]
    total=0
    for number in arr:
        if number < 0:
            pass
        else:
            positive_array.append(number)

    for positive_number in positive_array:
        total=total+positive_number


    return total

positive_sum([1,-4,7,12])