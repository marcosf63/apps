import httplib

def ler_html(loc):
  conn = httplib.HTTPConnection('aluno.uvanet.br')
  loc = "/" + loc
  #print type(loc)
  conn.request("GET/", loc)
  r = conn.getresponse()
  headers =  dict(r.getheaders())
  print headers
  
if __name__ == '__main__':
  ler_html('index.php')
