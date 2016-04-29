import httplib

def ler_html():
  conn = httplib.HTTPConnection('aluno.uvanet.br')
  conn.request("GET", "/acesso.php")
  r = conn.getresponse()
  print dir(r)
  
if __name__ == '__main__':
  ler_html()
