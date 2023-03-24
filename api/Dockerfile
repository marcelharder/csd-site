
FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY Release App/
WORKDIR /App


COPY assets/pdf/*.pdf /App/assets/pdf/


#COPY ./wait-for-it.sh /App/wait-for-it.sh
#RUN chmod +x /App/wait-for-it.sh

ENTRYPOINT [ "dotnet", "Cardiohelp.dll" ]
