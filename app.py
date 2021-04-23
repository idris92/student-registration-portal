from flask import Flask, render_template, url_for, request
import json


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/getStarted', methods=['GET','POST'])
def getStarted():
    state= []
    localG= []  
    if request.method == 'GET':
        with open ('static/states-localgovts.json') as f:
            data = json.load(f)
            for x in data:
                state.append(x['state'])
        return render_template('getStarted.html',state=state)
    elif request.method == 'POST':
        print('POST')
    
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