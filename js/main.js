// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
document.getElementById("clickMe").onclick = downloadFile;

async function downloadFile() {
  console.log('download pdf inicio');

  // fetch('https://api.github.com/users/KrunalLathiya')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data) // Prints result from `response.json()` in getRequest
  //   })
  //   .catch(error => console.error(error))


  let url = `http://www.ons.org.br/%2FMPO%2FDocumento%20Normativo%2F2.%20Cadastros%20de%20Informa%C3%A7%C3%B5es%20Operacionais%20-%20SM%2010.18%2F2.1.%20Cadastros%20de%20Informa%C3%A7%C3%B5es%20Operacionais%20de%20Dados%20de%20Equipamentos%2F2.1.1.%20Interliga%C3%A7%C3%B5es%20entre%20Regi%C3%B5es%2FCD-CT.6MD.01_Rev.24.pdf`;
  // const resp = await fetch(url, {
  //   method: 'GET'
  // });
  // const blob = await resp.blob();
  // download(blob);
  const request = new Request(url, { mode: 'no-cors' });

  fetch(request)
    .then(response => response.blob())
    .then(blob => console.log(blob))


  // fetch(request)
  //   .then(response => {
  //     var file = new Blob([response], {type: 'application/pdf'});
  //     var fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //   });

  // fetch(request)
  //   .then(response => response.blob())
  //   .then(data => window.open(URL.createObjectURL(data)))
    

  console.log('download pdf concluido');
}