def counter(num):
    counter = 0
    for i in range(1,num+1):
        if i % 5 == 0:
            counter += 1

    print(counter)

counter(25)