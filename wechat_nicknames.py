import csv
with open('3.csv') as f:
    a = f.readlines()
with open('names.csv', encoding='utf-8') as f:
    lines = set(f.readlines() + a)
    print(len(lines))
with open('new.csv', 'w') as f:
    f.writelines(lines)
