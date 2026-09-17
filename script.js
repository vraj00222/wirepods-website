document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-dl]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=a.getAttribute('data-dl');
      console.log('[WirePods] download click',t);
      // If release not yet published, redirect to releases page
      // Check HEAD of URL — if 404, go to repo
    });
  });
});
