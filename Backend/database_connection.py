import json
import gspread
from oauth2client.client import SignedJwtAssertionCredentials

def write(name,date,ingredients,times):
    """
    :param name - string
    :param date - string
    :param ingredients - []string
    :param times - []string
    """
    json_key = json.load(open('client_secret.json')) # json credentials you downloaded earlier
    # scope = ['https://spreadsheets.google.com/feeds']
    scope = ['https://www.googleapis.com/auth/spreadsheets', "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]

    credentials = SignedJwtAssertionCredentials(json_key['client_email'], json_key['private_key'].encode(), scope) # get email and key from creds

    file = gspread.authorize(credentials) # authenticate with Google
    sheet = file.open("MakeUofT-SmartStove").sheet1 # open sheet

    col = sheet.col_values(1)
    length = len(col) + 1

    sheet.update_cell(length,1,name)
    sheet.update_cell(length,2,date)

    i = 3

    for j in range(len(ingredients)):
        sheet.update_cell(length,i,ingredients[j])
        i+=1
        sheet.update_cell(length,i,times[j])
        i+=1

def read():
    """
    :param name - string
    :param date - string
    :param ingredients - []string
    :param times - []string
    """
    json_key = json.load(open('client_secret.json')) # json credentials you downloaded earlier
    # scope = ['https://spreadsheets.google.com/feeds']
    scope = ['https://www.googleapis.com/auth/spreadsheets', "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]

    credentials = SignedJwtAssertionCredentials(json_key['client_email'], json_key['private_key'].encode(), scope) # get email and key from creds

    file = gspread.authorize(credentials) # authenticate with Google
    sheet = file.open("MakeUofT-SmartStove").sheet1 # open sheet

    list_of_lists = sheet.get_all_values()

    return list_of_lists
