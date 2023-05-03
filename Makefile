# MakeFile for restChat
# server using C++ Microservice
# sudo mkdir /var/www/html/restChat
# sudo chown ubuntu /var/www/html/restChat

all: PutHTML restChat

PutHTML:
	cp restChat.html /var/www/html/chatfinal/
	cp restChat.css /var/www/html/chatfinal/
	cp restChat.js /var/www/html/chatfinal/
	
	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/chatfinal/

restChat : restChat.cpp httplib.h
	$(CXX) -o restChat $(CXXFLAGS) restChat.cpp $(OPENSSL_SUPPORT) $(ZLIB_SUPPORT) $(BROTLI_SUPPORT) 

clean:
	rm restChat *.o
