document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  // console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key= =${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl,  
          document.getElementById('#iframe').style.display='block';
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url,
          document.getElementById('#img').style.display='block';
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()