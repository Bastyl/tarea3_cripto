import json
from base64 import b64encode
from Crypto.Cipher import DES3
from Crypto.Random import get_random_bytes

data = b"secret secret secret secret" #mensaje
key = b"abcdfabcdf132453" #key debe ser del mismo largo del string presente(16 bits)
iv = b'abcdefgh' #iv debe ser del mismo largo del string presente (8 bits)


#Encriptacion =======================================================
cipher = DES3.new(key, DES3.MODE_CFB, iv=iv)
ct_bytes = cipher.encrypt(data)

ct = b64encode(ct_bytes).decode('utf-8')
llave = b64encode(key).decode('utf-8')
result = json.dumps({'iv': 'abcdefgh', 'ciphertext':ct, 'key': llave})
print(result)
#====================================================================


#Desencriptacion ====================================================

cipher2 = DES3.new(key, DES3.MODE_CFB, iv=iv)
pt = cipher2.decrypt(ct_bytes)
print("The message was: ", pt)
print("iv: ", b64encode(iv).decode('utf-8'))

iv_utf8 = b64encode(iv).decode('utf-8')

#print(b64encode(data).decode('utf-8'))

#====================================================================

#HTML ===============================================================

f = open('tarea3.html','w')

mensaje = """<p>Este sitio contiene un mensaje secreto</p><div class="3DES" id=" """+ct+""" "></div>"""
mensaje2 = """<p>Este sitio contiene un mensaje secreto</p><div class="IV" id=" """+iv_utf8+""" "></div>"""

f.write(mensaje+'\n'+mensaje2)
f.close()

#====================================================================