variable = "let banglaDistricts = ["
while True:
    str = input()
    parts = str.split()
    if str == "x":
        break
    variable += '{thai: "' + parts[-1] + '", latin: "' + parts[0] + '"},'
print(variable)
