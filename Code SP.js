// Ejemplo de datos de publicaciones
const posts = [
  {
    author: 'Nombre de Usuario 1',
    tags: ['#tag1', '#tag2'],
    title: 'Título de la publicación 1',
    content: 'Contenido de la publicación 1'
  },
  {
    author: 'Nombre de Usuario 2',
    tags: ['#tag1', '#tag3'],
    title: 'Título de la publicación 2',
    content: 'Contenido de la publicación 2'
  },
  // Agrega más publicaciones aquí
];

// Función para mostrar las publicaciones en el contenedor
function showPosts() {
  const postContainer = document.getElementById('postContainer');
  postContainer.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';

    const profileImg = document.createElement('img');
    profileImg.src = 'profile.jpg';
    profileImg.alt = 'Foto de perfil del publicador';
    profileImg.className = 'post-profile';

    const postInfo = document.createElement('div');
    postInfo.className = 'post-info';

    const postAuthor = document.createElement('span');
    postAuthor.className = 'post-author';
    postAuthor.textContent = post.author;

    const postTags = document.createElement('span');
    postTags.className = 'post-tags';
    postTags.textContent = 'Tags: ' + post.tags.join(' ');

    const postTitle = document.createElement('h2');
    postTitle.className = 'post-title';
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.className = 'post-content';
    postContent.textContent = post.content;

    postInfo.appendChild(postAuthor);
    postInfo.appendChild(postTags);

    postHeader.appendChild(profileImg);
    postHeader.appendChild(postInfo);

    postElement.appendChild(postHeader);
    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postContainer.appendChild(postElement);
  });
}

// Función para mostrar el formulario de subir publicación
function showUploadForm() {
  const username = document.getElementById('username').textContent;
  const tags = ['#tag1', '#tag2', '#tag3']; // Ejemplo de tags disponibles para seleccionar

  let tagsHtml = '';
  tags.forEach(tag => {
    tagsHtml += `<option value="${tag}">${tag}</option>`;
  });

  const uploadForm = `
    <h2>Subir Publicación</h2>
    <label for="postTitle">Título:</label>
    <input type="text" id="postTitle">
    <label for="postContent">Contenido:</label>
    <textarea id="postContent"></textarea>
    <label for="postTags">Tags:</label>
    <select id="postTags" multiple>
      ${tagsHtml}
    </select>
    <button onclick="submitPost('${username}')">Publicar</button>
  `;

  const postContainer = document.getElementById('postContainer');
  postContainer.innerHTML = uploadForm;
}

// Función para enviar la publicación
function submitPost(username) {
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;
  const postTags = Array.from(document.getElementById('postTags').selectedOptions).map(option => option.value);

  const newPost = {
    author: username,
    tags: postTags,
    title: postTitle,
    content: postContent
  };

  posts.push(newPost);
  showPosts();
}

// Mostrar las publicaciones al cargar la página
window.onload = function() {
  showPosts();
};
