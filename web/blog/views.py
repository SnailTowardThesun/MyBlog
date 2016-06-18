from django.shortcuts import render
from models import *
from forms import *
from django.core.mail import send_mail, BadHeaderError,EmailMultiAlternatives
# Create your views here.
def homepage(request):
    # get top five blogs here
    latest_article = Article.objects.order_by('-article_published_time')[:5]
    page_name = 'ME_KUN_HAN'
    context = {'latest_article': latest_article, 'page_name':page_name}
    return render(request, 'blog/index.html', context)


def page_list(request, page_list_num):
    # get the blog begin with blog_begin_num
    i_page_num = int(page_list_num)
    list_article = Article.objects.order_by('-article_published_time')[(i_page_num - 1) * 2:(i_page_num - 1) * 2 + 2]
    # get the number of all pages.
    # PS: the max size of blogs in one page is 5
    if i_page_num < 2:
        previous = 1
    else:
        previous = i_page_num - 1

    count = Article.objects.all().count()
    print("the i_page_num is ", i_page_num, " the article's count is ", count)
    if i_page_num * 2 >= count:
        next_page = i_page_num
    else:
        next_page = i_page_num + 1
    list_page = [previous, next_page, count]
    context = {
        'list_article': list_article,
        'list_page': list_page,
    }
    return render(request, 'blog/pagelist.html', context)


def article_page(request, article_file):
    # get comments here
    return render(request, 'blog/BlogPages/' + article_file + '.html')
#            name = request.POST['customer_name']
#            email = request.POST['email_address']
#            phone = request.POST['phone_number']
#            message = request.POST['message']
            # send email to hanvskun@hotmail.com

def leave_message(request):
    if request.method == 'POST':
        contact_message = ContactMeMessage(request.POST)
        if contact_message.is_valid():
            print('message is valid')
            subject, from_email, to = 'hello', 'hanvskun@hotamil.com', 'hanvskun@126.com'
            text_content = 'This is an important message.'
            html_content = '<p>This is an <strong>important</strong> message.</p>'
            msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
    return render(request, 'blog/leave_message_result.html')


# static files
def aboutMe(request):
    return render(request, 'blog/about.html')


def contact(request):
    return render(request, 'blog/contact.html')


def post(request):
    return render(request, 'blog/html5player.html')
