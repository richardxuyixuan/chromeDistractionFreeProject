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
def main():
    word=input("Enter the word:\n")
    two_level_relate(word)
    return None
main()

#print(outp)
#out=outp.split("}")
#print(type(out))
#print(out)