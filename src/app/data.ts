export const user = (params?: any) => ({
    name: "User",
    avatar: "/assets/avatar.jpg",
    ...params,
});

export const User1 = user();

export const task = (params?: any) => ({
    title: "Design Website",
    category: "todo",
    tags: ["Design", "HTML"],
    users: [User1, User1],
    ...params,
});

export const designWebsite = task();

export const productDesign = task({
    title: "Product Design",
    category: "todo",
    tags: ["HTML"],
});

export const implementAuth = task({
    title: "Implement Authentication",
    category: "in-progress",
    tags: ["Development", "In Progress"],
  })