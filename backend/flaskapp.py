from distutils.log import ERROR
from flask import Flask, request, render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)

app.config['MYSQL_HOST'] = '107.180.1.16'
app.config['MYSQL_USER'] = '440fall20225'
app.config['MYSQL_PASSWORD'] = '440fall20225'
app.config['MYSQL_DB'] = '440fall20225'

mysql = MySQL(app)
html_string = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/><title>Kool Gamez</title><link href='styles.css' rel='stylesheet'/></head><body><form action='#' method='POST'><p>Click to view user database</p><input type='submit' value='submit'></form></body></html>"



@app.route('/')
def home():
    return 'Home Page'



@app.route('/login', methods=['POST'])
def login():
    # GET method(inital load of the page) returns html with sub
    if request.method == "POST":

        # status 0: account created
        # status 1: sql connection error
        # status 2: no matching username
        # status 3: no matching password

        print('inside login post method')

        try:
            request_data = request.get_json()
            print(request_data['email'])
        except:
            print('failed to get request data')
            return {'logged_in': False}

        try:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            print('cursor created')
            cursor.execute(f"SELECT * FROM user WHERE email = '{request_data['email']}'")
            account = cursor.fetchone()
            print(account)
        except:
            print('failed connect to database')
            return {'status': 1}

        if account == None:
            print('no matching user')
            return {'status': 2}

            
        elif account['password'] != request_data['password']:
            print('password was wrong')
            return {'status': 3}

        else:
            print('we have a match')
            account['status'] = 0
            print(account)
            print(request_data)
            return account
    else:
        return html_string


@app.route('/register', methods=['POST'])
def register():

    #status 0: account created
    #status 1: SQL connection error
    #status 2: email taken

    print('regestering')
    request_data = request.get_json()
    print(request_data)

    try:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f"SELECT * FROM user WHERE email= '{request_data['email']}'")
    except:
        print('sql connection failedddd')
        cursor.close()
        return {'status': 1}

    if cursor.rowcount != 0:
        print('email already in use')
        return{'status': 2}

    try:
        cursor.execute(f"INSERT INTO user (username, password, email, hangmanScore, snakeScore, tictactoeScore) VALUES ('{request_data['username']}', '{request_data['password']}', '{request_data['email']}', 0, 0, 0)")
        mysql.connection.commit()
        print('created')
    except:
        print('sql connection failedyy')
        cursor.close()
        return {'status': 1}

    cursor.execute(f"SELECT * FROM user WHERE email = '{request_data['email']}'")
    account = cursor.fetchone()
    account['status'] = 0
    return account
 

@app.route('/leaderboard')
def leaderboard():
    print('getting scoreboard')
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute("SELECT username, hangmanScore FROM user ORDER BY hangmanScore DESC LIMIT 3")
    hangmanScores = cursor.fetchall()

    cursor.execute("SELECT username, snakeScore FROM user ORDER BY snakeScore DESC LIMIT 3")
    snakeScores = cursor.fetchall()

    cursor.execute("SELECT username, tictactoeScore FROM user ORDER BY tictactoeScore DESC LIMIT 3")
    tictactoeScores = cursor.fetchall()

    print(snakeScores)
    print(hangmanScores)
    print(tictactoeScores)
    scores = {'snake': snakeScores, 'hangman': hangmanScores, 'tictactoe': tictactoeScores}
    return scores


@app.route('/updateScore', methods=['POST'])
def update():
    #Takes in users id and current score
    # we need to update total score in both local storage, and our database

    # needs the games tile LOWERCASE, Current users id, and their score for this game from localStorage

    print('updating score')
    request_data = request.get_json()

    gameName = str(request_data['gameTitle']+'Score')

    new_score = request_data[gameName] + 1
    cursor = mysql.connection.cursor()



    cursor.execute(f"UPDATE user SET {gameName} = {new_score} WHERE id = {request_data['id']}")
    mysql.connection.commit()
    print('Score Updated')


    






if __name__ == "__main__":
    app.run(debug=True)