def even_or_odd(s):
    total = 0
    even_array = []
    odd_array = []
    total_odd = 0
    total_even = 0

    splitted_string = [int(x) for x in s]

    # split even and odd numbers
    for num in splitted_string:
        if num % 2 == 0:
            even_array.append(num)
        else:
            odd_array.append(num)

    # Sum even and odd numbers each and compare
    for even in even_array:
        total_even += even

    for odd in odd_array:
        total_odd += odd

    if total_even > total_odd:
        result = 'Even is greater than Odd'
    elif total_even < total_odd:
        result = "Odd is greater than Even"
    elif total_even == total_odd:
        result = "Even and Odd are the same"

    return result


print(even_or_odd('12'))
print(even_or_odd('123'))
print(even_or_odd('112'))
