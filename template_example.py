# an example of template programs

from string import Template

def main:
    #normal String formating with format()
    str1 = "cool guys {0} and {1}".format("You", "Me")
    print(str1)
    str2 = "this is a ${0} template example ${1} ".format("python" ,"1")

    # TODO: Creating a template with placeholders 
    templ = Template("this is a ${title} template example ${num} ")

    # TODO: use the substitute meethod with keyword arguements
    str3 = templ.substitute(title = "Python", num = "2")
    print(str3)

    # TODO: use the substitute method with dictionary
    data0 = {
            "title" : "Python",
            "num" : "1"
    }
    
    str4 = templ.substitute(data0)
    print(str4)

if __main__:
    main()
