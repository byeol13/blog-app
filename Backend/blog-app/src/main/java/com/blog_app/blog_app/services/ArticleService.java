package com.blog_app.blog_app.services;

import com.blog_app.blog_app.entity.Article;
import com.blog_app.blog_app.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;


    public Article createArticle(Article article) {
        article.setCreatedAt(new Date());

        return articleRepository.save(article);
    }


    public Article getArticleById(Long id) {

        return articleRepository.findById(id).orElse(null);
    }


    public Article updateArticle(Article article1) {

        return articleRepository.save(article1);
    }


    public List<Article> getAllArticle() {

        return articleRepository.findAllByOrderByCreatedAtDesc();
    }


    public void deleteArticle(Article article) {

        articleRepository.delete(article);
    }

}
