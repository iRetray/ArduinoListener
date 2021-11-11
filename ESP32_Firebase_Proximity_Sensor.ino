#include "SSD1306.h"
#include "FirebaseESP32.h"
#include <WiFi.h>
#define FIREBASE_HOST "https://arduinolistener-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "04qweiZNEb0OHbnESb6q42Y4yyU3LeuHZ1B26kMT"
const char* ssid = "JOHNATAN MARTIN";
const char* password = "LestrangE";

FirebaseData firebaseData;
String entrada = "entradas";
String actuales = "actuales";
String Texto = "consoleMessages";


int sensor = 2;
int Valor = HIGH ;
int contador = 0;
int Estado = Firebase.getInt(firebaseData, actuales + "");



SSD1306 display(0x3c, 5, 4);    
   
WiFiServer server(80);


String getMessage(String Person){
  String Frase = "Entro una persona, actualmente hay: " + Person ;
  return Frase;
}

String getDato(String Number){
  String Frase = Texto +"/1" + Number ;
  return Frase;
}



void setup() {
  {
  Serial.begin(115200);
  pinMode(sensor, INPUT);
  display.init();
  display.drawString(1, 1, ".Conectandose");
  display.display();    


  WiFi.begin(ssid, password);
  display.init();
  display.drawString(1, 1, "Conectado al Wi-Fi");
  display.display();    
  Serial.print(Estado);
  Serial.print("Conectado al Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  display.init();
  display.drawString(1, 1, "Conectado con IP: ");
  display.display();  
  Serial.print("Conectado con IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setString(firebaseData, Texto + "/0", "CONECTANDO CON EL ESP32");
  }
}

void loop() {

  Valor = digitalRead(sensor);
  Serial.println(Valor);
  if (Valor == LOW){ 
    Estado = Estado + 1;
    contador = contador + 1;
    display.init();
    display.drawString(1, 1, "OBSTACULO DETECTADO");
    display.display();  
    Firebase.setString(firebaseData, getDato(String(contador)), getMessage(String(Estado)));
    Firebase.setInt(firebaseData, entrada + "", contador);
    Firebase.setInt(firebaseData, actuales + "", Estado);
    delay(2000);  
  }
  else{ 
    display.init();
    display.drawString(1, 1, "OBSTACULO NO DETECTADO");
    display.display();    
    delay(2000);
  }
 
}
