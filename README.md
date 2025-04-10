This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## React Next Date Picker

ReactNextDatePicker is a React component for creating date pickers, calendars, and month picker inputs for web applications.

## Features

```bash
<MonthPicker />
# or
<DatePicker />
# or
<Button />
# or
<Card />
```

## Installation

```bash
npm install react-next-date-picker
#or
yarn add react-next-date-picker
```

## Example

```bash
<MonthPicker
    placeHolder={"Pick Month"}
    date={periodEndDate}
    setDate={(e: any) => {
        etPeriodEndDate(e)
    }}
/>
```


```bash
<DatePicker
    placeHolder={"Pick Date"}
    date={periodEndDate}
    setDate={(e: any) => {
        etPeriodEndDate(e)
    }}
/>
```


```bash
<Card
  title='Tite'
>
    <span>
        Body
    </span>
</Card>
```


```bash
        <Button
              variant={!emailForgot ? "disabled" : "primary"}
              size="sm"
              className="mt-6 w-full"
              disabled={!emailForgot}
              onClick={() => handleSubmit()}
            >
              Send Link Reset Password
        </Button>
```
