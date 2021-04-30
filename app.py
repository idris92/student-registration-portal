from flask import Flask, render_template, url_for, request
import json
import sqlite3
import os


currentDirectory = os.path.dirname(os.path.abspath(__file__))



app = Flask(__name__)

upload_folder = 'static/images'
app.config['upload_folder'] = upload_folder


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/getStarted', methods=['GET','POST'])
def getStarted(): 
    if request.method == 'GET':
        state= []

        with open ('static/states-localgovts.json') as f:
            data = json.load(f)
            for x in data:
                state.append(x['state'])
        return render_template('getStarted.html',state=state)
    else:
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        image = request.files.get('image')
        image_path = image.filename
        image.save(os.path.join(app.config['upload_folder'], image.filename))
        middlename = request.form['middlename']
        dob = request.form['date']
        phone = request.form['phone']
        state = request.form['state']
        local = request.form['local-govt']
        nextofkin = request.form['nextofkin']
        email = request.form['mail']
        address = request.form['address']
        score = request.form['score']

        
        # print(image.filename)
        connection = sqlite3.connect(currentDirectory + "\students.db")
        cursor = connection.cursor()
        query1 = "INSERT INTO datatable VALUES ('{image_url}','{firstname}','{middlename}','{lastname}','{dob}',{phone},'{state}','{local}', '{nextofkin}', '{email}', '{address}', {score})".format( image_url = image_path, firstname= firstname, middlename= middlename,lastname = lastname, dob=dob, phone=phone, state= state, local=local, nextofkin= nextofkin,email=email,address=address, score=score)

        cursor.execute(query1)
        connection.commit()
        connection.close()
        return render_template('/studentList.html')

    
@app.route('/studentList')
def studentList():
    return render_template('studentList.html')

@app.route('/details')
def details():
    return render_template('details.html')








    #     word = request.get_json().get('word')
    #     with open ('static/states-localgovts.json') as f:
    #         data = json.load(f)
    #         for x in data:
    #             if x['state'] == word:
    #                 localG.append(x['local'])
    
    

    # return render_template('getStarted.html', localG =localG)

    




# @app.route('/getStarted', methods=['GET','POST'])
# def getLocal():
#     localG= []
#     if request.method == 'POST':
#         word = request.get_json().get('word')
#         with open ('static/states-localgovts.json') as f:
#             data = json.load(f)
#             for x in data:
#                 if x['state'] == word:
#                     localG.append(x['local'])
    
    

#     return render_template('getStarted.html', localG =localG)





if __name__ == '__main__':
    app.run(debug=True)