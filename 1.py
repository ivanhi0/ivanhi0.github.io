#Задание 2
# for n in range(1, 100):
#     s = bin(n)[2:]
#     if n % 2 == 0:
#         s = s + "10"

#     else:
#         s = "1" + s + "00"
#     r = int(s, 2)


#     if r > 107:
#         print(r)
#         break

# num 4
#N - кол цветов
#I - объём изображения
#K - кол точек или x * y

#K = x * y
#I = x * y * i
#N = 2^i
#i = I/K=60


#Задание 5
#print('x y z w')
#for x in range(0, 2):
#    for y in range(0, 2):
#        for z in range(0, 2):
#           for w in range(0, 2):
#                if (((z == w) and (not x or y)) or not w) ==0:
#                    print(x, y, z, w)


#Задание 6
#count = 0
#word = sorted('апрель')
#print(word)
#for letter1 in word:
#    for letter2 in word:
#        for letter3 in word:
#            for letter4 in word:
#                result = letter1 + letter2 + letter3 + letter4
#                count = count + 1
#                if (not 'аа' in result and (result.count('р')>=2)) :
#                    print(count)
#                   exit()

#Задание 7
#import ipaddress
#net = ipaddress.IPv4Network('192.168.112.170/255.255.255.224', strict=False)
#ip = ipaddress.IPv4Address('192.168.112.170')
#node_number = int(ip) - int(net.network_address)
#print(node_number)

#from ipaddress import *
#net = ip_network('.../...', 0)
#print(int(ip_address('...'))-int(net.network_address))

#Задание 8
#p=7
#q=11
#e=17
#count = (p-1)*(q-1)
#for d in range (0, count):
#    if (e*d)%count == 1:
#       print(d)

#Задание 10
#string = 72 * '2' + 27 * '7' # наша строка
#while '727' in string or '777' in string or '222' in string:
#    if '222' in string:
#        string = string.replace('222', '7') #replace замена 222 на 7
#    elif '777' in string:
#        string = string.replace('777', '7')
#    elif '727' in string:
#        string = string.replace('727', '2')

#print(string)

#num 11
# for x in range(0, 10):
#   n1=2*10**4 + 4*10**3 + 1*10**2 + x*10+3
#   n2=2*10**4 + x*10**3 + 0*10**2 + 2*10+5
#   s=n1+n2
#   if s%23 == 0:
#     print(s//23)

# num 12
#1 write, add 00 if requered
#2 inversiya (replase 0's with 1's and vise versa)
#3 add '1' if needed() {
#26_2 = 11010_2
#3.1 00011010 (untill 8 bits)
#3.2 inversiya (replase 0's with 1's and vise versa) = 11100101
#3.3 add '1' = 11100101
#					 1
#}

#Задание 13
#with open('13.txt') as f:
#    data = [int(x) for x in f.readlines()]

#M = min(x for x in data if x % 10 != 0)

#count = 0
#max_sum = -float('inf')
#for i in range(len(data) - 1):
#    a = data[i]
#    b = data[i + 1]
#    if a % M == 0 and b % M == 0:
#        count += 1
#        max_sum = max(max_sum, a + b)
#print(count, max_sum)
