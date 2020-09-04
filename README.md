# nice_google_apps_script

Just some Google Apps Script I'm happy with.

A lot of it was written after coming off a while of writing Elixir.

I wanted to try a lot more functional approaching and writing in much more Elixirish way with Google Apps Script.

The project ended up using `class` like `defmodule` and much of the code uses anonymous functions. No `if` conditions are used, preferring `switch` instead.

So I'm proud of how it turned out and hope that it helps someone else with thinking about how to write Google Apps Script

# Setup Commands

1. Run `npm install -g @google/clasp` to install clasp.
2. Run `clasp login` to login to your Google.
3. Run `npm install` to get `@types/google-apps-script` for coding.
4. Make `nice_google_apps_script/clasp/email_thing/.clasp.json` with `{ "scriptId": PASTE_SCRIPT_ID_HERE }`
5. With a shell in `nice_google_apps_script/clasp/email_thing` run `clasp push` to push code to your Google Sheet's Google App Script.

# Setup Google Sheet

A Sheet called, "Reminder List" would look like...

| Employee Email | Position | Form Sent | Send Reminder | Last Sent |
| -------------- | -------- | --------- | ------------- | --------- |
| test0@test.com | Manager  | 9/2/2020  | FALSE         | 9/2/2020  |
| test1@test.com | Employee | 9/2/2020  | TRUE          | 9/4/2020  |
| ...            | ...      | ...       | ...           | ...       |

A Sheet called, "Configuration" would look like...

| Reply To       | Subject      | Link             | Body                          | Activated |
| -------------- | ------------ | ---------------- | ----------------------------- | --------- |
| test2@test.com | Test Subject | https://test.com | Hello, visit LINK_PLACEHOLDER | TRUE      |

# Understanding

## Reading List

- Controller.ts
  - Gives us easy access to the Spreadsheet (`"spreadsheet_url"`).
  - Uses the Spreadsheet to also get the Sheets (`Reminder List`, `"Configuration"`).
- ConfigurationSheet.ts
  - Receives `spreadsheet` from `new Controller()` to get the `new ConfigurationSheet()`.
  - Gets other properties from the Configuration Sheet with `getRange().getValue()`.
- ReminderSheet.ts
  - Receives `spreadsheet` from `new Controller()` to get the `new ReminderSheet()`.
  - Gets other properties from the first Sheet in the Spreadsheet with `getRange().getValues()`.
  - Gets the `records` which will become `new Employee()` structs.
- Employee.ts
  - Defines a struct for an `new Employee()` using a `class`.
- Employees.ts
  - Uses the records received from `new ReminderSheet()` to build a list of `new Employee()` structs.
- ReminderScheduler.ts
  - Receives a `new Employee()` struct and determines if a reminder needs to be sent.
- ReminderEmail.ts
  - Defines a struct for a `new ReminderEmail()` using a `class`.
- Code.ts
  - Defines the functions that we want our Google Apps Script to run e.g. `send_reminders()`.

## Stuff to Know

JavaScript is often lumped with "Object Oriented Programming (OOP)".

While using objects is pretty neat, JavaScript can also uses functions as objects.

Some of the ways that this can be thought about can be confusing, so this code is as "functional" as can be made.

Any critique is welcome!
