<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MailVerification extends Mailable
{
    use Queueable, SerializesModels;
    public $otp_code;
    public $email;
    
    public function __construct($otp_code, $email, $name)
    {
        $this->otp_code = $otp_code;
        $this->email = $email;
        $this->name = $name;
    }

    public function build()
    {
        return $this->subject($this->otp_code . ' is your verification code')->view('otpverify')->with('otp_code', $this->otp_code)->with('email', $this->email)->with('name', $this->name);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Mail Verification',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'otpverify',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
