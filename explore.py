from multi_rake import Rake
import requests
import time



def get_relatedwords(word):
    resp = requests.get('http://api.conceptnet.io/related/c/en/%s?filter=/c/en'%(word))
    if resp.status_code != 200:
        # This means something went wrong.
        print(resp.status_code)
    resp.json()

    next_level_terms=[]


    for item in resp.json()['related']:
        next_level_terms=next_level_terms+[item['@id'][6:]]
        #print(item['@id'][6:])
    return next_level_terms

def two_level_relate(word):
    Next=get_relatedwords(word)
    final=[]
    cnt=0
    for i in Next:
        cnt=cnt+1
        print(cnt)
        try:
            final=final+get_relatedwords(i)
            time.sleep(0.2)
        except:
            break
    final=list(set(final))
    print(len(final))
    print(final)
    return final
def matching(keywords,webTitle):#return true if overlap exist,i.e. pass
    web_key=getKey(webTitle)
    web_key_list=[]
    for i in web_key:
        web_key_list=web_key_list+[i[0]]
    isDisjoint = not set(web_key_list).isdisjoint(set(keywords))
    return isDisjoint
    
def getKey(text):
    rake=Rake()
    keywords=rake.apply(text)
    print(keywords[:7])    
    return keywords[:7]

def main():
    courseTitle=input("Enter the course title:\n")
    webTitle="yes let's study some physics"
    keywords=getKey(courseTitle)
    courseTitle_list=[]
    for i in keywords[:7]:
        courseTitle_list=courseTitle_list+get_relatedwords(i[0])
    decision=matching(courseTitle_list,webTitle)
    if decision==True:
        print("go ahead")
    else:
        print('focus!')
    return None

main()
#print(outp)
#out=outp.split("}")
#print(type(out))
#print(out)