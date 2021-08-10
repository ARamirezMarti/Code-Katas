def square_digits(num):
    import math
    powered_numbered = []
    split_number = list(str(num))
    for number in split_number:
        number_pow = math.pow(int(number), 2)
        number_pow_int = int(number_pow)
        powered_numbered.append(str(number_pow_int))

    return int(''.join(powered_numbered))


print(square_digits(9119), 811181)
print(square_digits(0), 0)
