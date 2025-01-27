The solution involves robust error handling within the `getStaticProps` or `getServerSideProps` function. This involves catching potential errors, logging them appropriately, and providing a suitable user experience (e.g., displaying a custom error page or redirecting to a fallback).

```javascript
// pages/post/[slug].js
export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const res = await fetch(`https://api.example.com/posts/${slug}`);
    if (!res.ok) {
      // Handle non-2xx status codes
      throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return { props: { post: data } };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true, // Or redirect to a custom error page
    };
  }
}
```

By explicitly handling errors and providing feedback, you create a more robust and user-friendly Next.js application.