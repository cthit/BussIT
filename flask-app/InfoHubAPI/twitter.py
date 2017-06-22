import json
import requests
import bs4

def getTwitterJSON(user):
    data = {'images': []}
    data['images'] = getPosts(user)
    return modifyJSON(data)

def modifyJSON(data):
    return json.dumps(data)

def getPosts(user):
    posts = []
    r = requests.get('https://twitter.com/' + user)
    r.raise_for_status()
    noStarchSoup = bs4.BeautifulSoup(r.text)
    elems = noStarchSoup.select('div.AdaptiveMedia-photoContainer.js-adaptive-photo > img')
    for elem in elems:
        posts.append(elem.attrs['src'])
    return posts
