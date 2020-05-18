from multi_rake import Rake
import requests
import time

main()

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
    title=input("Enter the course title:\n")
    rake=Rake()
    keywords=rake.apply(title)
    print(keywords[:5])
    final_out=[]
    for i in keywords[:5]:
        final_out=final_out+two_level_relate(i[0])
    return None


#print(outp)
#out=outp.split("}")
#print(type(out))
#print(out)