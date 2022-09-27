from flask import Flask, request, render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)



app.config['MYSQL_HOST'] = '107.180.1.16'
app.config['MYSQL_USER'] = '440fall20225'
app.config['MYSQL_PASSWORD'] = '440fall20225'
app.config['MYSQL_DB'] = '440fall20225'

mysql = MySQL(app)


@app.route('/')
def home():
    return 'Home Page'



@app.route('/login', methods=['POST'])
def test():
    # GET method(inital load of the page) returns html with sub
    if request.method == "POST":
        print('inside login post method')

        try:
            request_data = request.get_json()
            print(request_data['email'])
        except:
            print('failed to get request data')
            return {'logged_in': False}
        
        # try:
        #     cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        #     print('cursor created')
        #     cursor.execute(f"SELECT * FROM user WHERE email = '{request_data['email']}'")
        #     account = cursor.fetchone()
        #     print(account)
        # except:
        #     print('failed to get data from database')
        #     return {'logged_in': False}

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        print('cursor created')
        cursor.execute(f"SELECT * FROM user WHERE email = '{request_data['email']}'")
        account = cursor.fetchone()
        print(account)


        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        print('cursor created')
        cursor.execute(f"SELECT * FROM user WHERE email = '{request_data['email']}'")
        account = cursor.fetchone()
        print(account)

        if account == None:
            print('no matching user')
            return {'logged_in': False}

            
        elif account['password'] != request_data['password']:
            print('password was wrong')
            return {'logged_in': False}

        else:
            print('we have a match')
            account['logged_in'] = True
            print(account)
            print(request_data)
            return account
        


        

        return f'{account}'
    else:
        return html_string

    



html_string = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/><title>Kool Gamez</title><link href='styles.css' rel='stylesheet'/></head><body><form action='#' method='POST'><p>Click to view user database</p><input type='submit' value='submit'></form></body></html>"








if __name__ == "__main__":
    app.run(debug=True)