"""import of math functions to allow square root"""
import math
"""
- Functions:
"""

"""Function to add two numbers together that are inputted by user"""
def add(num1, num2):
  return(num1 + num2)

"""Function to subtract two numbers together that are inputted by user"""
def subtract(num1, num2):
  return(num1 - num2)

"""Function to multiply two numbers together that are inputted by user"""
def multiply(num1, num2):
  return(num1 * num2)

"""Function to provide the result of the first number to the power of the second that are inputted by user"""
def Exponentiation(num1, num2):
  return(num1 ** num2)

"""Function to provide square root of num 1 entered by user"""
def sqrt(num1):
  if num1 > 0 :
    return (math.sqrt(num1))

"""Function to return the remainder of the two numbers that are inputted by user"""
def modulus(num1, num2):
  return(num1 % num2)

"""Function to divide two numbers together that are inputted by user and returns a value error if the user tries to divide by 0"""""
def divide(num1, num2):
  if num2 == 0: 
    return ("Value Error cannot divide by 0 please enter another number")
  else:
    return(num1 / num2)

"""a while loop that continues as long as it is true, it allows the user to provide inputs of numbers and operators to calculate what they would like. it also has an error message if the user tries to input an invalid operator. After this is completed and the result is displayed it allows the user to continue to enter new values or end using the calculator"""
while True:
  num1 = float(input("Please enter a number: ")) 
  operator = input("Enter operator: (+, -, *, /, **, %, //):) ")
  if operator == "//":
    print (sqrt(num1))
    continue_input = input(str("Would you like to continue? (y/n): "))
    if continue_input == "y":
      continue  
  num2 = float(input("Please enter another number: "))
  if operator == "+":
    print(add(num1, num2))
  elif operator == "-":
    print (subtract(num1, num2))
  elif operator == "*":
    print (multiply(num1, num2))
  elif operator == "**":
    print (Exponentiation(num1, num2))
  elif operator == "%":
    print (modulus(num1, num2))
  elif operator == "/":
    print (divide (num1, num2))
  else:
      print("Please enter a valid operator (+, -, *, /, **, %, //)) ")
  continue_input = input(str("Would you like to continue? (Y/N): "))
  if continue_input.capitalize() == "Y":
    continue
  else:
    break
