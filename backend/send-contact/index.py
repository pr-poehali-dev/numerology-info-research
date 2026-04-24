"""
Отправка заявки с формы контактов на почту владельца сайта
"""
import json
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def handler(event: dict, context) -> dict:
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    try:
        body = json.loads(event.get('body') or '{}')
    except Exception:
        return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'Invalid JSON'})}

    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    topic = body.get('topic', '').strip()
    message = body.get('message', '').strip()

    if not email or not message:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Email и сообщение обязательны'})
        }

    topic_labels = {
        'consultation': 'Запись на консультацию',
        'question': 'Вопрос по нумерологии',
        'course': 'Вопрос по обучению',
        'cooperation': 'Сотрудничество',
        'other': 'Другое',
    }
    topic_text = topic_labels.get(topic, topic or 'Не указана')

    smtp_user = 'Viratrumper@gmail.com'
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    to_email = 'Viratrumper@gmail.com'

    html_body = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #080C1A; color: #E8D4A0; padding: 40px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.3);">
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 32px; color: #C9A84C; margin-bottom: 8px;">✦</div>
        <h1 style="font-size: 24px; color: #C9A84C; margin: 0; font-weight: 400;">Новая заявка</h1>
        <p style="color: rgba(232,212,160,0.5); font-size: 13px; margin-top: 4px;">Числа Судьбы — форма контактов</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 16px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.15); border-radius: 8px 8px 0 0;">
            <span style="color: rgba(201,168,76,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Имя</span><br>
            <span style="font-size: 16px;">{name or 'Не указано'}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: rgba(201,168,76,0.03); border: 1px solid rgba(201,168,76,0.15); border-top: none;">
            <span style="color: rgba(201,168,76,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</span><br>
            <span style="font-size: 16px;"><a href="mailto:{email}" style="color: #C9A84C; text-decoration: none;">{email}</a></span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.15); border-top: none;">
            <span style="color: rgba(201,168,76,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Тема</span><br>
            <span style="font-size: 16px;">{topic_text}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: rgba(201,168,76,0.03); border: 1px solid rgba(201,168,76,0.15); border-top: none; border-radius: 0 0 8px 8px;">
            <span style="color: rgba(201,168,76,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Сообщение</span><br>
            <span style="font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{message}</span>
          </td>
        </tr>
      </table>

      <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.15);">
        <p style="color: rgba(232,212,160,0.3); font-size: 12px; margin: 0;">© Числа Судьбы · chisla-sudby.ru</p>
      </div>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'✦ Новая заявка: {topic_text} — от {name or email}'
    msg['From'] = f'Числа Судьбы <{smtp_user}>'
    msg['To'] = to_email
    msg['Reply-To'] = email

    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, to_email, msg.as_string())
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True, 'message': 'Сообщение отправлено'})
    }
