## Notes for building apps

1. Create the app server with express.
2. Create 4 routes for CRUD logic.
3. Connect a database
4. Place DB logic under route that matches the method you want

```js
app.get("/api/workout/new", (req, res) => {
  db.Workout.create(res.body)
    .then(result => {
      res.json({ success: true });
    })
    .catch(err => {
      res.json({ err: err });
    });
});
```

The above route creates a new workout. Notice how we made the route with "new". This is not necessary, but can sometimes help figure out what the route does early in development.

### MODEL VIEW CONTROLLER

When we develop the back end (and how Jusitn typically builds his apps) we build the model first, then the controller then the view, because UIs that do not have information on them do not look good. - Justin Rice
