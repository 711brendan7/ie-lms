// The original Pages address remains an entrance to the authenticated lesson.
function mountCourseVideo(section, course, home = false) {
  if (!course?.video) return;
  const {title, duration, portal} = course.video;
  const meta = document.createElement('p');
  meta.className = 'lesson-video-meta';
  meta.textContent = '導入動画 · ' + duration;
  const heading = document.createElement('h2');
  heading.id = 'lesson-video-heading';
  heading.textContent = home ? course.title : title;
  const teaser = document.createElement('p');
  teaser.textContent = title;
  const link = document.createElement('a');
  link.className = 'lesson-video-open';
  const watch = new URL(home ? '/index.html' : '/course.html', portal);
  if (!home) watch.searchParams.set('id', course.id);
  watch.hash = 'intro-video';
  link.href = watch.href;
  link.textContent = '受講者サイトで動画を見る';
  const access = document.createElement('p');
  access.className = 'lesson-video-availability';
  access.textContent = '現在、サイト所有者限定で試聴できます。';
  section.replaceChildren(meta, heading);
  if (home) section.append(teaser);
  section.append(link, access);
  section.setAttribute('aria-labelledby', heading.id);
  section.hidden = false;
}
