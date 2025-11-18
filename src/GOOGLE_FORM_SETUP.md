# Google Form Integration Setup

This document explains how to connect your Google Form to the Contact Modal component.

## Steps to Connect Your Google Form

### 1. Create Your Google Form

1. Go to [Google Forms](https://forms.google.com/)
2. Create a new form or use an existing one
3. Add the fields you want (e.g., Name, Email, Company, Message, etc.)

### 2. Get the Embed Code

1. In your Google Form, click the **Send** button (top right)
2. Click the **< >** (Embed HTML) tab
3. Copy the iframe src URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID_HERE/viewform?embedded=true
   ```

### 3. Update the ContactModal Component

1. Open `/components/ContactModal.tsx`
2. Find this line (around line 79):
   ```tsx
   src="https://docs.google.com/forms/d/e/1FAIpQLSfYOUR_FORM_ID_HERE/viewform?embedded=true"
   ```
3. Replace the URL with your actual Google Form URL

### Example

If your Google Form embed URL is:
```
https://docs.google.com/forms/d/e/1FAIpQLSdABCDEFG123456789/viewform?embedded=true
```

Update the iframe src to:
```tsx
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSdABCDEFG123456789/viewform?embedded=true"
  width="100%"
  height="100%"
  frameBorder="0"
  marginHeight={0}
  marginWidth={0}
  className="w-full"
  title="Contact Form"
>
  Loading…
</iframe>
```

## Where the Contact Modal is Used

The Contact Modal is now connected to the following CTAs throughout the website:

1. **Header (Desktop & Mobile)** - "Contact Us" button
2. **Footer** - "Subscribe" button in the newsletter section
3. **Footer** - "Schedule a consultation" link
4. **Homepage** - "Schedule a Consultation" button in the services section

## Recommended Google Form Fields

For a professional contact form, consider including:

- **Name** (Required, Short answer)
- **Email** (Required, Short answer with email validation)
- **Company** (Optional, Short answer)
- **Phone** (Optional, Short answer)
- **Service Interest** (Dropdown with your service offerings)
- **Message** (Paragraph, Required)
- **How did you hear about us?** (Optional, Multiple choice or dropdown)

## Customization Options

### Adjust Modal Height

If your form is longer or shorter, you can adjust the modal height in `/components/ContactModal.tsx`:

```tsx
<div className="overflow-y-auto" style={{ height: "calc(90vh - 140px)", maxHeight: "600px" }}>
```

Change `maxHeight: "600px"` to your preferred height.

### Change Modal Colors

The modal uses the brand colors from your design system:
- Header background: `from-[#4A5565] to-[#5A6575]`
- Accent color: `#00F000`

You can customize these in the ContactModal component.

## Testing

After setting up your Google Form URL:

1. Click any "Contact Us", "Subscribe", or "Schedule a consultation" button
2. The modal should open with your Google Form embedded
3. Fill out and submit the form to test
4. Check your Google Form responses to verify submissions

## Troubleshooting

### Form doesn't appear
- Ensure the Google Form is set to accept responses
- Check that the URL is correct and includes `?embedded=true`
- Verify the form isn't restricted to specific users/domains

### Form is cut off
- Adjust the `maxHeight` property in the modal
- Ensure your form isn't excessively long (consider breaking into multiple pages)

### Mobile display issues
- Google Forms are responsive by default
- Test on various screen sizes
- The modal is already optimized for mobile with `max-w-2xl` and padding

## Alternative: Direct Google Form Link

If you prefer to open the Google Form in a new tab instead of embedding:

Replace the iframe with a button that opens a new window:
```tsx
<a
  href="YOUR_GOOGLE_FORM_URL"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full px-8 py-3 bg-[#00F000] text-[#4A5565] font-medium rounded-lg hover:bg-[#00F000]/90 transition-all text-center"
>
  Open Contact Form
</a>
```
